# App
build:
	@docker build -t kube-app:latest .

push-%: build
	@docker tag kube-app:latest ikerry/kube-app:$(*)
	@docker push ikerry/kube-app:$(*)

stop:
	@docker stop $(shell docker ps -qa)

run: stop
	@docker-compose build node
	@docker-compose run --rm -d -p 8080:8080 node

sh: stop
	@docker-compose build sh
	@docker-compose run sh
