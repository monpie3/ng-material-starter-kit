import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {BehaviorSubject, Observable, Subject, combineLatest, of} from 'rxjs';
import {map} from 'rxjs/operators';
import {ProductModel} from '../../models/product.model';
import {ProductsService} from '../../services/products.service';
import {CategoriesService} from '../../services/categories.service';

@Component({
    selector: 'app-advanced-products-list',
    templateUrl: './advanced-products-list.component.html',
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdvancedProductsListComponent {
    private _orderByPriceSubject: BehaviorSubject<string> = new BehaviorSubject<string>('asc');
    public order_by_price$: Observable<string> = this._orderByPriceSubject.asObservable();
    public order_by_price: Observable<string[]> = of(['asc', 'desc'])


    readonly categories$: Observable<string[]> = this._categoriesService.getAll();
    private _filterByCategorySubject: Subject<string> = new Subject<string>();
    public filterByCategory$: Observable<string> = this._filterByCategorySubject.asObservable();

    readonly products$: Observable<ProductModel[]> = combineLatest(
        [this._productsService.getAll(),
            this.order_by_price$,
            this.filterByCategory$
        ]).pipe(
        map(([products, order_by_price, filterByCategory]: [ProductModel[], string, string]) => {
            return products.filter(product => product.category === filterByCategory).sort((a, b) => {
                if (a.price > b.price) return order_by_price === 'asc' ? 1 : -1;
                if (a.price < b.price) return order_by_price === 'asc' ? -1 : 1;
                return 0;
            })
        })
    );

    constructor(private _productsService: ProductsService, private _categoriesService: CategoriesService) {
    }

    sort(order: string): void {
        this._orderByPriceSubject.next(order);
    }

    selectCategory(category: string): void {
        this._filterByCategorySubject.next(category);
    }
}
