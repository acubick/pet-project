import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HoverRoutingModule } from './hover-routing.module';
import { ImageHoverOverlayComponent } from './image-hover-overlay/image-hover-overlay.component';
import { CardHoverEffectsComponent } from './card-hover-effects/card-hover-effects.component';
import { FlipHardHoverComponent } from './flip-hard-hover/flip-hard-hover.component';
import { GradientGlassmorphismCardComponent } from './gradient-glassmorphism-card/gradient-glassmorphism-card.component';
import { SocialMediaIconComponent } from './social-media-icon/social-media-icon.component';
import { SkewedBorderComponent } from './skewed-border/skewed-border.component';


@NgModule({
  declarations: [
    ImageHoverOverlayComponent,
    CardHoverEffectsComponent,
    FlipHardHoverComponent,
    GradientGlassmorphismCardComponent,
    SocialMediaIconComponent,
    SkewedBorderComponent],
    imports: [
        CommonModule,
        HoverRoutingModule
    ]
})
export class HoverModule { }
