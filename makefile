# App
build:
	@docker build -t kube-app:latest .

push-%: build
	@docker tag kube-app:latest ikerry/kube-app:latest
	@docker tag kube-app:latest ikerry/kube-app:$(*)
	@docker push ikerry/kube-app:$(*)
	@docker push ikerry/kube-app:latest

stop:
	@docker stop $(shell docker ps -qa)

run:
	@docker-compose build node
	@docker-compose run --rm -d --service-ports node

test:
	./bin/e2e.sh

sh: stop
	@docker-compose build sh
	@docker-compose run sh
