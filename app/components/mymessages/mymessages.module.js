import {compose} from "./compose.component";
import {folderList} from "./directives/folderList.component";
import {message} from "./message.component";
import {messageList} from "./messageList.component";
import {mymessages} from "./mymessages.component";
import {messageTable} from "./directives/messageTable.component";
import {sortMessages} from "./directives/sortMessages.directive";
import {messageBody} from "./filters/messageBody.filter";
import {MessageListUI} from "./services/messagesListUI.service";

import {composeState, messageState, messageListState, mymessagesState} from "./mymessages.states";

export const MYMESSAGES_MODULE = angular.module('mymessages', [])
  .directive('sortMessages', sortMessages)
  .component('compose', compose)
  .component('folderList', folderList)
  .component('message', message)
  .component('messageList', messageList)
  .component('mymessages', mymessages)
  .component('messageTable', messageTable)

  .filter('messageBody', messageBody)

  .service('MessageListUI', MessageListUI)

  .config(['$stateRegistryProvider', function($stateRegistry) {
    $stateRegistry.register(composeState);
    $stateRegistry.register(messageState);
    $stateRegistry.register(messageListState);
    $stateRegistry.register(mymessagesState);
  }]);
