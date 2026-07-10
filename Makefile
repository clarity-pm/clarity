.PHONY: build

SITE_DIR := website-v2
BUILD_DIR := $(SITE_DIR)/public
ARCHIVE := website.zip

build:
	rm -f $(ARCHIVE)
	hugo --source $(SITE_DIR) --destination public
	cd $(BUILD_DIR) && zip -qr ../../$(ARCHIVE) .
