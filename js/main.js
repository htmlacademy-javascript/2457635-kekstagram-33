import { arrayPhotos } from './data.js';
import './util.js';
import './big-picture.js';
import {renderThumbnails} from './thumbnails.js';
import {initUploadModal} from './upload-photo-form.js';

renderThumbnails(arrayPhotos);
initUploadModal();

