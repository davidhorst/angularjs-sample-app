
export class DialogService {
  constructor($document, $compile, $rootScope, $mdDialog) {
    this.body = $document.find("body");
    this.$mdDialog = $mdDialog;
  }

  confirm(message, details = "Are you sure?", yesMsg = "Yes", noMsg="No") {
    const confirm = this.$mdDialog.confirm()
      .clickOutsideToClose(false)
      .title(details)
      .textContent(message)
      .ariaLabel('Alert Dialog')
      .ok(yesMsg)
      .cancel(noMsg)
      .targetEvent(this.body);

    return this.$mdDialog.show(confirm);
  }
}

DialogService.$inject = ['$document', '$compile', '$rootScope', '$mdDialog'];
