import Controller from '@ember/controller';

export default Controller.extend({
  totalArticlesCount: Ember.computed.alias('model.articles.length'),
  
});
