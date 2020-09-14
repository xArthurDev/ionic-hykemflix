import { Todo, TodoService } from './../../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NavController, LoadingController } from '@ionic/angular';

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { AdmobService } from '../../services/admob.service';

@Pipe({
  name: 'safe'
})
 
@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.page.html',
  styleUrls: ['./todo-details.page.scss'],
})

export class TodoDetailsPage implements OnInit {
 
  todo: Todo = {
    task: 'Título',
    genre: 'Gênero',
    trailer: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    url: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    url2: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    duration: 'Duração',
    poster: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    type: 'Tipo',
    temp1ep1dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp1ep1leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp1ep2dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp1ep2leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp1ep3dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp1ep3leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp1ep4dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp1ep4leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp1ep5dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp1ep5leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp1ep6dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp1ep6leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp1ep7dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp1ep7leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp1ep8dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp1ep8leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp1ep9dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp1ep9leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp1ep10dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp1ep10leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp1ep11dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp1ep11leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp1ep12dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp1ep12leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp1ep13dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp1ep13leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp1ep14dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp1ep14leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp1ep15dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp1ep15leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp1ep16dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp1ep16leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp1ep17dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp1ep17leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp1ep18dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp1ep18leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp1ep19dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp1ep19leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp1ep20dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp1ep20leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp1ep21dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp1ep21leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp1ep22dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp1ep22leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp1ep23dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp1ep23leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp1ep24dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp1ep24leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp1ep25dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp1ep25leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp2ep1dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp2ep1leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp2ep2dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp2ep2leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp2ep3dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp2ep3leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp2ep4dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp2ep4leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp2ep5dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp2ep5leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp2ep6dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp2ep6leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp2ep7dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp2ep7leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp2ep8dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp2ep8leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp2ep9dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp2ep9leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp2ep10dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp2ep10leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp2ep11dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp2ep11leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp2ep12dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp2ep12leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp2ep13dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp2ep13leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp2ep14dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp2ep14leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp2ep15dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp2ep15leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp2ep16dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp2ep16leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp2ep17dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp2ep17leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp2ep18dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp2ep18leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp2ep19dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp2ep19leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp2ep20dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp2ep20leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp2ep21dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp2ep21leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp2ep22dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp2ep22leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp2ep23dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp2ep23leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp2ep24dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp2ep24leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp2ep25dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp2ep25leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp3ep1dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp3ep1leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp3ep2dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp3ep2leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp3ep3dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp3ep3leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp3ep4dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp3ep4leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp3ep5dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp3ep5leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp3ep6dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp3ep6leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp3ep7dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp3ep7leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp3ep8dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp3ep8leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp3ep9dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp3ep9leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp3ep10dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp3ep10leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp3ep11dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp3ep11leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp3ep12dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp3ep12leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp3ep13dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp3ep13leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp3ep14dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp3ep14leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp3ep15dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp3ep15leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp3ep16dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp3ep16leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp3ep17dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp3ep17leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp3ep18dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp3ep18leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp3ep19dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp3ep19leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp3ep20dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp3ep20leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp3ep21dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp3ep21leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp3ep22dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp3ep22leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp3ep23dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp3ep23leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp3ep24dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp3ep24leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp3ep25dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp3ep25leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp4ep1dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp4ep1leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp4ep2dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp4ep2leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp4ep3dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp4ep3leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp4ep4dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp4ep4leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp4ep5dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp4ep5leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp4ep6dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp4ep6leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp4ep7dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp4ep7leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp4ep8dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp4ep8leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp4ep9dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp4ep9leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp4ep10dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp4ep10leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp4ep11dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp4ep11leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp4ep12dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp4ep12leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp4ep13dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp4ep13leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp4ep14dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp4ep14leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp4ep15dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp4ep15leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp4ep16dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp4ep16leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp4ep17dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp4ep17leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp4ep18dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp4ep18leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp4ep19dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp4ep19leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp4ep20dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp4ep20leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp4ep21dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp4ep21leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp4ep22dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp4ep22leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp4ep23dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp4ep23leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp4ep24dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp4ep24leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp4ep25dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp4ep25leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp5ep1dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp5ep1leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp5ep2dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp5ep2leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp5ep3dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp5ep3leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp5ep4dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp5ep4leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp5ep5dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp5ep5leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp5ep6dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp5ep6leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp5ep7dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp5ep7leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp5ep8dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp5ep8leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp5ep9dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp5ep9leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp5ep10dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp5ep10leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp5ep11dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp5ep11leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp5ep12dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp5ep12leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp5ep13dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp5ep13leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp5ep14dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp5ep14leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp5ep15dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp5ep15leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp5ep16dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp5ep16leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp5ep17dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp5ep17leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp5ep18dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp5ep18leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp5ep19dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp5ep19leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp5ep20dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp5ep20leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp5ep21dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp5ep21leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp5ep22dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp5ep22leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp5ep23dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp5ep23leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp5ep24dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp5ep24leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp5ep25dub: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    temp5ep25leg: 'https://firebasestorage.googleapis.com/v0/b/todofirebase-32bdb.appspot.com/o/logo2.png?alt=media&token=17bc2e87-75e6-438c-abec-e0889d45cf7f',
    
  };
 
  todoId = null;
 
  constructor(private admobService: AdmobService, private route: ActivatedRoute, private router: Router, private todoService: TodoService, private loadingController: LoadingController, private sanitizer: DomSanitizer) { }
 
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    return this.sanitizer.bypassSecurityTrustScript(url);
  }

  ngOnInit() {
    this.todoId = this.route.snapshot.params['id'];
    if (this.todoId)  {
      this.loadTodo();
    }
  }
 
  async loadTodo() {
    const loading = await this.loadingController.create({
      message: 'Carregando..'
    });
    await loading.present();
 
    this.todoService.getTodo(this.todoId).subscribe(res => {
      loading.dismiss();
      this.todo = res;
    });
  }
 
  async saveTodo() {
 
    const loading = await this.loadingController.create({
      message: 'Saving Todo..'
    });
    await loading.present();
 
    if (this.todoId) {
      this.todoService.updateTodo(this.todo, this.todoId).then(() => {
        loading.dismiss();
        this.router.navigateByUrl('home');
      });
    } else {
      this.todoService.addTodo(this.todo).then(() => {
        loading.dismiss();
        this.router.navigateByUrl('home');
      });
    }
  }

  //FUNCTION FOR INTERSTITIAL
  Interstitial(){
    this.admobService.ShowInterstitial();
  }
  //FUNCTION FOR VIDEOREWARD
  Reward(){
    this.admobService.ShowRewardVideo();
  }
 
}