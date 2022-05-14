AGE = n
IMAGE_NAME = playwright-anonymath
CONTAINER_NAME = playwright-anonymath-e2e
TARGET = /anonymath

build-test-environment:
	docker build -t $(IMAGE_NAME) tests/e2e/container

open-test-environment:
	docker run -it --network=host -v ${PWD}:$(TARGET) -w $(TARGET) --rm --ipc=host --name $(CONTAINER_NAME) $(IMAGE_NAME) /bin/bash
	
run-e2e-tests:
	@read -p "Are the development environment up and the website is running? (y/n): " response; \
	if [ $$response != "y" ]; then echo "Sorry but the E2E tests can not be executed"; exit 0 ; else docker run -it --network=host -v ${PWD}:$(TARGET) -w $(TARGET) --rm --ipc=host --name $(CONTAINER_NAME) $(IMAGE_NAME) yarn test:e2e ; fi