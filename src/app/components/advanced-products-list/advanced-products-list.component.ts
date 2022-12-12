import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {BehaviorSubject, combineLatest, map, Observable, of} from 'rxjs';
import {ProductModel} from '../../models/product.model';
import {ProductsService} from '../../services/products.service';

@Component({
    selector: 'app-advanced-products-list',
    templateUrl: './advanced-products-list.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdvancedProductsListComponent {
    private _orderByPriceSubject: BehaviorSubject<string> = new BehaviorSubject<string>('asc');
    public order_by_price$: Observable<string> = this._orderByPriceSubject.asObservable();
    readonly products$: Observable<ProductModel[]> = combineLatest(
        [this._productsService.getAll(),
            this.order_by_price$
        ]).pipe(
        map(([products, order_by_price]: [ProductModel[], string]) => {
            return products.sort((a, b) => {
                if (a.price > b.price) return order_by_price === 'asc' ? 1 : -1;
                if (a.price < b.price) return order_by_price === 'asc' ? -1 : 1;
                return 0;
            })
        })
    );

    public order_by_price: Observable<string[]> = of(['asc', 'desc'])
    constructor(private _productsService: ProductsService) {
    }

    sort(order: string): void {
        this._orderByPriceSubject.next(order);
    }
}
