FROM golang:latest as stage

WORKDIR /app/go/src/
COPY . /app/go/src 

RUN go build -ldflags="-w -s" -trimpath -o /app/go/src/main

FROM scratch as RUNNER

COPY --from=stage /app/go/src/main /app/go/main/

ENTRYPOINT [ "/app/go/main" ]