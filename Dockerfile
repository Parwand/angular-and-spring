FROM openjdk:17
WORKDIR app
ARG JAR_FILE="target/*.jar"
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["JAVA", "-jar", "app.jar"]