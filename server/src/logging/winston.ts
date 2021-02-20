import winston from "winston";

const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: {
    service: "main",
  },
  transports: [
    new winston.transports.File({ filename: "error.json.log", level: "error" }),
    new winston.transports.File({ filename: "debug.json.log" }),
  ],
});

if (process.env.NODE_ENV !== "production") {
  logger.add(
    new winston.transports.Console({
      format: winston.format.prettyPrint({
        colorize: true,
      }),
    })
  );
}
