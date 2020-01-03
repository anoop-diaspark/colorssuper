import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderMoreRoutingModule } from './header-more-routing.module';
import { EventsComponent } from './events/events.component';
import { SchedulesComponent } from './schedules/schedules.component';
import { SocialComponent } from './social/social.component';


@NgModule({
  declarations: [EventsComponent, SchedulesComponent, SocialComponent],
  imports: [
    CommonModule,
    HeaderMoreRoutingModule
  ]
})
export class HeaderMoreModule { }
