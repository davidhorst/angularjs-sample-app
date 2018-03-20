import * as angular from "angular";

export class LoadingIndicatorService {
  constructor($document) {
    const content = $document.find("div#content");
    
    const spinnerMarkup = '<div id="spinner">HELLO IM A DUMB SPINNER</div>';

    this.showLoadingIndicator = () => {
      console.log('show indicator');

      // content.append(angular.element('<div id="spinner">HELLO IM A DUMB SPINNER</div>'));
    };

    this.hideLoadingIndicator = () => {
      console.log('remove indicator');

      // console.log(spinner)
      // spinner.parentElement.removeChild(spinner);
    };
  }
}
LoadingIndicatorService.$inject = ['$document'];
