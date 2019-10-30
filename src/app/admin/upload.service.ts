import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import {Upload} from '../model/upload';
import {AngularFirestore} from "angularfire2/firestore";
import * as faker from 'faker';


@Injectable({
  providedIn: 'root'
})

export class UploadService {

  //sube archivos (imagenes) a storage y database, dentro de las colecciones anidadas de upload

  private basePath = '/products';       //path donde se guardaran los archivos de storage

  constructor(private afs: AngularFirestore)
  {

  }

  pushFileToStorage(fileUpload: Upload, progress: {percentage: number}, id: any)
  {

      const storageRef = firebase.storage().ref();
      const fileId = faker.random.alphaNumeric(16);       //id aleatorio para el archivo
      const uploadTask = storageRef.child(`${this.basePath}/${fileId}`).put(fileUpload.file);

      uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {
          // en progreso
          const snap = snapshot as firebase.storage.UploadTaskSnapshot;
          progress.percentage = Math.round((snap.bytesTransferred / snap.totalBytes) * 100);
        },
        (error) => {
          // para mostrar el error
          console.log(error);
        },
        () => {
          // si no hay fallas
          fileUpload.id = fileId;
          fileUpload.url = uploadTask.snapshot.downloadURL;
          fileUpload.name = fileUpload.file.name;
          this.saveFileData(fileUpload, id); //con el id del producto
        }
      );

    }

    private saveFileData(fileUpload: Upload, uid: any)
    {

      let product = this.afs.collection(`products`).doc(uid);//va a productos y busca el producto, solo adjunta imagenes si el archivo esta creado
      let newRef = product.collection('uploads').doc(fileUpload.id);// si no existe crea una nueva coleccion
      newRef.set({
        id: fileUpload.id,
        name: fileUpload.name,
        url: fileUpload.url
      });

    }

    public removeFile(fileId)
    {
      //elimina la imagen cuando se elimina primero el archivo
      return (firebase.storage().ref().child(`${this.basePath}/${fileId}`).delete());

    }
}
