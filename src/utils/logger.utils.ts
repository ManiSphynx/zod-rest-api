import logger from "pino";
import dayjs from "dayjs";

const log = logger({
  base: {
    pid: false,
    time: `"time":"${dayjs().format("YYYY-MM-DD HH:mm:ss")}"`,
  },
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
    },
  },
});

export default log;
