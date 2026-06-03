import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cmt-auth',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './cmt-auth.component.html',
  styleUrl: './cmt-auth.component.scss'
})
export class CmtAuthComponent {

  ngOnInit() {
    console.log('CMT Acknowledgement page loaded');
  }
}
