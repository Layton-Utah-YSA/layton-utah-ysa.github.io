import { Component } from '@angular/core';
import {ActivityComponent} from "../activity/activity.component";
import {Activity} from "../activity/activity";

@Component({
  selector: 'app-activities',
  standalone: true,
  imports: [
    ActivityComponent
  ],
  templateUrl: './activities.component.html',
  styleUrl: './activities.component.scss'
})
export class ActivitiesComponent {
  protected activities: Activity[] = [
    {
      title: "Yoga",
      startTime: new Date(Date.now()),
      description: "    We (Brennan, Cambree, and Brian) are starting a Yoga class at 8:30pm on Thursdays at the Burton Ln. building (our normal Sunday building). We have Mary Tarbet teaching. If you want a scaleable workout to fit your level, need some REAL good stretching after the Gym or just want to check out why people rave about yoga come on over. It'll be great!\n" +
        "    P.S. Mary is the bestest and really good at making sure there's yoga fit for every level!"
    },
    {
      title: "Ward Temple Morning",
      startTime: new Date(),
      description: "   Ward Temple Morning for Baptisms at The Bountiful Temple!\n" +
        "\n" +
        "    If you would like to carpool meet at the FHE church at 11:00 A.M. (There will be refreshments there and then we’ll carpool). Or you can drive separately, meet at the temple by 11:45 A.M."
    },
    {
      title: "Layton YSA Stake Institute",
      startTime: new Date(),
      description: "    Evening YSA Institute classes at Davis High seminary building each Tuesday night at 7:00pm. There are nine classes to choose from. Dinner is served after class each week at 8:00pm. Best place to be on a Tuesday night!\n" +
        "\n" +
        "    Address: Davis High School Seminary Building, 226 East 300 South, Kaysville"
    },
    {
      title: "Gospel Discussion Group for 25-35 year olds",
      startTime: new Date(),
      description: "    The stake is now hosting a new Gospel discussion group for young adults aged 25-35 years old on Wednesdays. There are two discussion groups on the weekly Come Follow Me and on the \"Green Scriptures\" (the scriptures found in the hymns).\n"
    }
  ]

}
