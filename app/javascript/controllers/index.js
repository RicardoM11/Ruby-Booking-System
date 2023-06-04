// This file is auto-generated by ./bin/rails stimulus:manifest:update
// Run that command whenever you add a new controller or create them with
// ./bin/rails generate stimulus controllerName

import { application } from "./controllers/application";

import ModalController from "./controllers/modal_controller";
application.register("modal", ModalController);

import ImageUploaderController from "./controllers/image_uploader_controller";
application.register("image_uploader", ImageUploaderController);
