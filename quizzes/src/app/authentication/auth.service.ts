import { Injectable } from '@angular/core';
import {AngularFirestore, DocumentSnapshot} from '@angular/fire/compat/firestore'
// import firebase from 'firebase/app'; // Import firebase from 'firebase/app'
import 'firebase/firestore'; // Import the Firestore module
import { User } from '../user.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fs:AngularFirestore) { }
  getAllUsers(){
    return this.fs.collection('/users').snapshotChanges()
  }
  deleteUser(id:any){
    console.log(id)
    const documentRef = this.fs.doc(`users/${id}`);
    // const documentRef = this.fs.collection('users').doc(id);
    documentRef.delete().then(() => {
      console.log('Document successfully deleted!');
    }).catch((error) => {
      console.error('Error removing document: ', error);
    });
  }
  // updateUser(user:any) {
  //   const collectionName = 'users';
  //   const documentId = 'eG039AgKP5mTltV4hr48';
  //   const newUser = user
  //   newUser.fname = "T"
  //   const newData = Object.assign({}, newUser); // Replace with the updated data

  //   console.log('Collection:', collectionName);
  //   console.log('Document ID:', documentId);
  //   console.log('New Data:', newData);

  //   // const documentRef = this.fs.collection(collectionName).doc(documentId);
  //   const documentRef = this.fs.doc(`users/${user.id}`);
  //   console.log(documentRef)
  //   // documentRef.update(newData)
  //   //   .then(() => {
  //   //     console.log('Document successfully updated!');
  //   //   })
  //   //   .catch((error) => {
  //   //     console.error('Error updating document: ', error);
  //   //   });
  //   documentRef.get().subscribe((docSnapshot) => {
  //     if (docSnapshot.exists) {
  //       documentRef.update(newData)
  //         .then(() => {
  //           console.log('Document successfully updated!');
  //         })
  //         .catch((error) => {
  //           console.error('Error updating document: ', error);
  //         });
  //     } else {
  //       console.error('Document does not exist.');
  //     }
  //   }, (error) => {
  //     console.error('Error getting document: ', error);
  //   });
  // }
  addUser(user:User){
    user = Object.assign({}, user)
    user.email += "@gmail.com"
    // const userObject = user['toObject']()
    user.id = this.fs.createId();
    return this.fs.collection('/users').add(user);
  }
}
