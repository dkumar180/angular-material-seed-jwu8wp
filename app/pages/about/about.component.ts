import { Component  } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
})
export class AboutComponent {

  cards = [
    { 
      title: 'SOLL Matrix - Introduction',
      content: 'The SOLL Matrix describes the authorisation and access implemented on the system. It is also called as the ING Access Manager.',
    },
    { 
      title: 'Implementation',
      content: '',
      items: [
        'We are implementing a User Interface that makes it easy to add the Business roles and Technical Roles required for different platforms',
        'Replacing the age old excel sheet format with an interactive UI that captures the required fields and also validates the entered information.',
        'Auto populate information that can be retrieved from other systems like CMDB, Aveksa etc.',
      ]
    },
    { 
      title: 'UI Components',
      items: [
        'Cover Page: This contains all details related to the application, asset owner, CMDB registration etc. Approval from AO/DAO required before sending it to implementation team.',
        'Subject Matrix - PA: This contains all the BR-TR mappings for the different platforms chosen on the first screen.',
      ]
    }
  ]

}
