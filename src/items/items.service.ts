import { Injectable } from '@nestjs/common';
import { CreateItemRequest, GetItemRequest, Item, Items } from './items';
import { randomUUID } from 'crypto';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [];
  private readonly itemsSubject = new Subject<Items>();

  createItem(request: CreateItemRequest): Item {
    const item: Item = {
      id: randomUUID(),
      ...request,
    };

    this.items.push(item);
    this.itemsSubject.next({ items: [...this.items] });

    return item;
  }

  getItem({ id }: GetItemRequest): Item {
    const item: Item | undefined = this.items.find(
      (item: Item) => item.id === id,
    );

    if (!item) throw new Error('Item not found');

    return item;
  }

  streamItems(): Observable<Items> {
    return this.itemsSubject.asObservable();
  }
}
