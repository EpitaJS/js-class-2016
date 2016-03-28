
import _ from 'lodash';
import tryUntil from './try-until';

export default function findAgency (DB, image, cb) {
 return tryUntil([
    image, DB

  ], cb);
  /*return tryUntil([
    // find image.agencyName
    // TODO find by credit
    // TODO fallback to 'Unknown'
  ], cb);*/
}
