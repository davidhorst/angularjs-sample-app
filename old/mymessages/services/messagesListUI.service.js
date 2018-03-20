/** Provides services related to a message list */
export class MessageListUI {
  constructor($filter, AppConfig) {
    this.$filter = $filter;
    this.AppConfig = AppConfig;
  }

  /** This is a UI helper which finds the nearest messageId in the messages list to the messageId parameter */
  proximalMessageId(messages, messageId) {
    const sorted = this.$filter("orderBy")(messages, this.AppConfig.sort);
    const idx = sorted.findIndex((msg) => msg._id === messageId);
    let proximalIdx = sorted.length > idx + 1 ? idx + 1 : idx - 1;
    return proximalIdx >= 0 ? sorted[proximalIdx]._id : undefined;
  }
}
MessageListUI.$inject = ['$filter', 'AppConfig'];