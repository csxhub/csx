import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderService } from './shared/services/order.service';
import { PortalComponent } from './components/portal/portal/portal.component';
import { UserHomeInquiryComponent } from './components/logged-user/home/user-home-home/user-home-home.component';
import { UserHomeProductsComponent } from './components/logged-user/home/user-home-products/user-home-products.component';
import { MaterialModule } from './shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UserQuotesHomeComponent } from './components/logged-user/quotes/user-quotes-home/user-quotes-home.component';
import { UserQuotesMarketInformationComponent } from './components/logged-user/quotes/user-quotes-market-information/user-quotes-market-information.component';
import { UserQuotesStockInformationComponent } from './components/logged-user/quotes/user-quotes-stock-information/user-quotes-stock-information.component';
import { PortalWhyCsxComponent } from './components/portal/portal-why-csx/portal-why-csx.component';
import { PortalNewToInvestingComponent } from './components/portal/portal-new-to-investing/portal-new-to-investing.component';
import { PortalActiveTradingComponent } from './components/portal/portal-active-trading/portal-active-trading.component';
import { PortalOpenAccountComponent } from './components/portal/portal-open-account/portal-open-account.component';
import { UserTradeHomeComponent } from './components/logged-user/trade/user-trade-home/user-trade-home.component';
import { UserResearchHomeComponent } from './components/logged-user/research/user-research-home/user-research-home.component';
import { UserStreetsmartHomeComponent } from './components/logged-user/streetsmart/user-streetsmart-home/user-streetsmart-home.component';
import { UserHomeInvestorRelationsComponent } from './components/logged-user/home/user-home-investor-relations/user-home-investor-relations.component';
import { UserHomeCareerComponent } from './components/logged-user/home/user-home-career/user-home-career.component';
import { UserHomeMySettingsComponent } from './components/logged-user/home/user-home-my-settings/user-home-my-settings.component';
import { UserHomeChangeProfileComponent } from './components/logged-user/home/user-home-change-profile/user-home-change-profile.component';
import { UserHomeDownloadsComponent } from './components/logged-user/home/user-home-downloads/user-home-downloads.component';
import { UserHomeContactUsComponent } from './components/logged-user/home/user-home-contact-us/user-home-contact-us.component';
import { UserQuotesBrokerInformationComponent } from './components/logged-user/quotes/user-quotes-broker-information/user-quotes-broker-information.component';
import { UserTradeEnterOrderComponent } from './components/logged-user/trade/user-trade-enter-order/user-trade-enter-order.component';
import { UserTradeViewModifyOrderComponent } from './components/logged-user/trade/user-trade-view-modify-order/user-trade-view-modify-order.component';
import { UserTradeTradingHistoryComponent } from './components/logged-user/trade/user-trade-trading-history/user-trade-trading-history.component';
import { UserTradePortfolioComponent } from './components/logged-user/trade/user-trade-portfolio/user-trade-portfolio.component';
import { UserTradeOhOrderComponent } from './components/logged-user/trade/user-trade-oh-order/user-trade-oh-order.component';
import { UserTradeOhViewCancelComponent } from './components/logged-user/trade/user-trade-oh-view-cancel/user-trade-oh-view-cancel.component';
import { UserTradeEipSchedulerComponent } from './components/logged-user/trade/user-trade-eip-scheduler/user-trade-eip-scheduler.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ShareDataServiceService} from 'src/app/shared/share-data-service.service';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { UserTradePreviewOrderComponent } from './components/logged-user/trade/user-trade-preview-order/user-trade-preview-order.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DiologpracComponent } from './diologprac/diologprac.component';

@NgModule({
  declarations: [
    AppComponent,
    PortalComponent,
    UserHomeInquiryComponent,
    UserHomeProductsComponent,
    UserQuotesHomeComponent,
    UserQuotesStockInformationComponent,
    UserQuotesMarketInformationComponent,
    PortalWhyCsxComponent,
    PortalNewToInvestingComponent,
    PortalActiveTradingComponent,
    PortalOpenAccountComponent,
    UserTradeHomeComponent,
    UserResearchHomeComponent,
    UserStreetsmartHomeComponent,
    UserHomeInvestorRelationsComponent,
    UserHomeCareerComponent,
    UserHomeMySettingsComponent,
    UserHomeChangeProfileComponent,
    UserHomeDownloadsComponent,
    UserHomeContactUsComponent,
    UserQuotesBrokerInformationComponent,
    UserTradeEnterOrderComponent,
    UserTradeViewModifyOrderComponent,
    UserTradeTradingHistoryComponent,
    UserTradePortfolioComponent,
    UserTradeOhOrderComponent,
    UserTradeOhViewCancelComponent,
    UserTradeEipSchedulerComponent,
    FirstComponent,
    SecondComponent,
    UserTradePreviewOrderComponent,
    DiologpracComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    //BrowserAnimationsModule
    NoopAnimationsModule,
    MatDialogModule
  ],
  providers: [ShareDataServiceService],
  //entryComponents: [UserTradePreviewOrderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
