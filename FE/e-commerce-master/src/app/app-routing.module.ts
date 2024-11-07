import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './components/layout/layout.component';
import { AcerComponent } from './features/home/pages/monitores/acer/acer.component';
import { GpuComponent } from './features/home/pages/gpu/gpu.component';

import { ProductPageComponent } from './features/home/pages/productPage/productPage.component';
import { CpuComponent } from './features/home/pages/cpu/cpu.component';
import { ProductPageGpuComponent } from './features/home/pages/productPageGpu/productPageGpu.component';
import { SsdComponent } from './features/home/pages/ssd/ssd.component';
import { TorreComponent } from './features/home/pages/torre/torre.component';
import { ProductPageSSDComponent } from './features/home/pages/productPageSSD/productPageSSD.component';
import { ProductPageTorreComponent } from './features/home/pages/productPageTorre/productPageTorre.component';

@NgModule({
  imports: [
      RouterModule.forRoot([
          {
              path: '', component: LayoutComponent,
              children: [
                  {path: '', loadChildren: () => import('./features/home/home.module').then(m => m.HomeModule) },
                  {path: 'monitor',component: AcerComponent},
                  {path: 'grafica',component: GpuComponent},
                  {path: 'cpu',component: CpuComponent},
                  {path: 'ssd',component: SsdComponent},
                  {path: 'torre',component: TorreComponent},
                  {path:'Monitor/:item',component: ProductPageComponent},
                  {path:'Grafica/:item',component: ProductPageGpuComponent},
                  {path:'SSD/:item',component: ProductPageSSDComponent},
                  {path:'Torre/:item',component: ProductPageTorreComponent},
                  {path:'Monitor/:item',component:ProductPageComponent},
                  {path:'Grafica/:item',component:ProductPageGpuComponent}
                  // { path: 'uikit', loadChildren: () => import('./demo/components/uikit/uikit.module').then(m => m.UIkitModule) },
                  // { path: 'utilities', loadChildren: () => import('./demo/components/utilities/utilities.module').then(m => m.UtilitiesModule) },
                  // { path: 'documentation', loadChildren: () => import('./demo/components/documentation/documentation.module').then(m => m.DocumentationModule) },
                  // { path: 'blocks', loadChildren: () => import('./demo/components/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
                  // { path: 'pages', loadChildren: () => import('./demo/components/pages/pages.module').then(m => m.PagesModule) }
              ]
          },
          // { path: 'auth', loadChildren: () => import('./demo/components/auth/auth.module').then(m => m.AuthModule) },
          // { path: 'landing', loadChildren: () => import('./demo/components/landing/landing.module').then(m => m.LandingModule) },
          //{ path: 'notfound', component: PageNotFoundComponent },
          { path: '**', redirectTo: '/notfound' },
      ], { scrollPositionRestoration: 'enabled', anchorScrolling: 'enabled', onSameUrlNavigation: 'reload' })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
