import { Component } from '@angular/core';
import { MyserService } from '../services/myser.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


  constructor(
    private userdata: MyserService,
    private router: Router,
  ) { }
  ngOnInit() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['/signin']);
    }
  }

  service = [
    {
      name: 'Product Engineering',
      img: 'https://www.calsoftinc.com/wp-content/uploads/2023/02/icons/Icons_20thFeb2023_Product%20Engineering%20(1).svg'
    },
    {
      name: 'Digital',
      img: 'https://www.calsoftinc.com/wp-content/uploads//2023/02/icons/Icons_20thFeb2023_Digital%20(1).svg'
    },
    {
      name: 'DevOps',
      img: 'https://www.calsoftinc.com/wp-content/uploads//2023/02/icons/Icons_20thFeb2023_DevOps%20(1).svg'
    },
    {
      name: 'UX/UI Engineering',
      img: 'https://www.calsoftinc.com/wp-content/uploads//2023/02/icons/Icons_20thFeb2023_DevOps%20(1).svg'
    },
    {
      name: 'Sustaining & Support',
      img: 'https://www.calsoftinc.com/wp-content/uploads//2023/02/icons/Icons_20thFeb2023_Sustaining%20&%20Support%20(1).svg'
    },
  ];

  customer = [
    {
      img: 'https://www.calsoftinc.com/wp-content/uploads//2023/02/icons/amazon-web-services-2.svg'
    },
    {
      img: 'https://www.calsoftinc.com/wp-content/uploads//2023/02/icons/google-cloud-partner-vertical-01.svg'
    },
    {
      img: 'https://www.calsoftinc.com/wp-content/uploads//2023/02/icons/microsoftpartner-01.svg'
    },
    {
      img: 'https://www.calsoftinc.com/wp-content/uploads//2023/02/icons/vmware-01.svg'
    },
    {
      img: 'https://www.calsoftinc.com/wp-content/uploads//2023/02/icons/NASSCOM_logo.svg'
    },
  ];


}
