import { Controller } from '@nestjs/common';
import {
  CreateItemRequest,
  GetItemRequest,
  Item,
  Items,
  ItemsServiceController,
  ItemsServiceControllerMethods,
} from './items';
import { ItemsService } from './items.service';
import { Observable } from 'rxjs';

@Controller('items')
@ItemsServiceControllerMethods()
export class ItemsController implements ItemsServiceController {
  constructor(private readonly itemsService: ItemsService) {}

  createItem(
    request: CreateItemRequest,
  ): Promise<Item> | Observable<Item> | Item {
    return this.itemsService.createItem(request);
  }

  getItem(request: GetItemRequest): Promise<Item> | Observable<Item> | Item {
    return this.itemsService.getItem(request);
  }

  streamItems(): Observable<Items> {
    return this.itemsService.streamItems();
  }
}
