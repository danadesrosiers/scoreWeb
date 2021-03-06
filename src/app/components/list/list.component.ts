import {Resource} from '../../services/rest.service';
import {OnInit} from '@angular/core';

export abstract class ListComponent<T extends Resource> implements OnInit {
  list: T[];
  newItem = {} as T;
  editID: number;
  showAddForm = false;

  constructor(protected service: any) { }

  abstract getHeader: () => string[];
  abstract getProperties: () => string[];

  ngOnInit() {
    this.service.query().subscribe(list => {
      this.list = list;
    });
  }

  delete(id: number) {
    this.service.delete(id).subscribe(() => {
      this.list = this.list.filter( item => item.id !== id );
    });
  }

  submit() {
    this.service.create(this.newItem).subscribe(item => {
      this.list.push(item); // add new item to the list
      this.newItem = {} as T; // clear the form
    });
  }

  edit(item: T) {
    this.service.edit(item).subscribe();  // We'll just assume it was successful for now
    this.editID = 0;
  }
}
