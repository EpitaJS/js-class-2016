
import _ from 'lodash';
import tryUntil from './try-until';

export default function findAgency (DB, image, cb) {
  tryUntil([
      // TODO find by agencyName
      function(cb)
      {
          DB.findAgency({name: image.agencyName}, cb);
      },
      // TODO find by credit
      function(cb)
      {
        DB.findAgency({name: image.credit}, cb);
      },
      // TODO fallback to 'Unknown'
      function(cb)
      {
        DB.findAgency({name: 'Unknown'}, cb);
      }
  ], cb);
}
