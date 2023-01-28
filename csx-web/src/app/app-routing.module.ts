import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserHomeInquiryComponent } from './components/logged-user/home/user-home-home/user-home-home.component';
import { UserHomeProductsComponent } from './components/logged-user/home/user-home-products/user-home-products.component';
import { UserQuotesHomeComponent } from './components/logged-user/quotes/user-quotes-home/user-quotes-home.component';
import { UserQuotesMarketInformationComponent } from './components/logged-user/quotes/user-quotes-market-information/user-quotes-market-information.component';
import { UserQuotesStockInformationComponent } from './components/logged-user/quotes/user-quotes-stock-information/user-quotes-stock-information.component';
import { PortalActiveTradingComponent } from './components/portal/portal-active-trading/portal-active-trading.component';
import { PortalNewToInvestingComponent } from './components/portal/portal-new-to-investing/portal-new-to-investing.component';
import { PortalOpenAccountComponent } from './components/portal/portal-open-account/portal-open-account.component';
import { PortalWhyCsxComponent } from './components/portal/portal-why-csx/portal-why-csx.component';
import { PortalComponent } from './components/portal/portal/portal.component';
import { DiologpracComponent } from './diologprac/diologprac.component';


const routes: Routes = [
  //
  {path:'logged-user-home-Inquiry',component:UserHomeInquiryComponent},
  //{path:'logged-user-home-Products',component:UserHomeProductsComponent},

  //
  {path:'logged-user-quotes-StockInformation',component:UserQuotesStockInformationComponent},
  {path:'logged-user-quotes-MarketInformation',component:UserQuotesMarketInformationComponent},
  
  // Portal and Partials
  {path:'portal-home',component:PortalComponent},
  {path:'portal-why-csx',component:PortalWhyCsxComponent},
  {path:'portal-new-to-investing',component:PortalNewToInvestingComponent},
  {path:'portal-active-trading',component:PortalActiveTradingComponent},
  {path:'portal-open-account',component:PortalOpenAccountComponent}
  

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
