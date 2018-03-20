/**
 * Renders a list of folders
 */
export const folderList = {
  bindings: {folders: '<'},

  template: `
  <md-card>
   <md-list>
    <md-divider></md-divider>
    <md-list-item 
      ng-repeat="folder in $ctrl.folders"
      ng-click="null"
      ui-sref=".messagelist({folderId: folder._id})"
      style="height:1.7em; min-height: initial;"
      >
        {{folder._id}}
       
      <md-divider></md-divider>
    </md-list-item>
  </md-list>
  </md-card>
  `
};
