import { CircularProgress, Card, CardBody, Chip} from "@nextui-org/react";


export default function CardRatings({ rating }) {
      // Funzione per determinare il colore del CircularProgress
      const progressColors = {
            exceptional: "success",
            recommended: "primary",
            meh: "warning",
            skip: "danger",
      };

      // Mappatura dei colori per il Chip
      const chipColors = {
            exceptional: "text-green-500",
            recommended: "text-blue-500",
            meh: "text-yellow-500",
            skip: "text-red-500",
      };
      const progressColor = progressColors[rating.title] || "primary";
      const chipColor = chipColors[rating.title] || "text-blue-500";

      return (
            <Card className=" w-[90%]  h-[150px] border border-default-200 bg-gradient-to-br from-white to-default-200 dark:from-default-50 dark:to-black">
                  <CardBody>
                  <div className=" mt-3">
                                    <div className="flex justify-evenly mb-2 ">
                                          <CircularProgress
                                                classNames={{
                                                      svg: "w-16 h-16 drop-shadow-md",
                                                      track: "stroke-white/10",
                                                      value: "text-md font-semibold text-white",

                                                }}
                                                className=" flex justify-center items-center"
                                                color={progressColor}
                                                showValueLabel={true}
                                                strokeWidth={4}
                                                value={rating.percent}
                                          />

                                    </div>
                              </div>
                                    <div className=" flex justify-evenly ">
                                          <Chip
                                                classNames={{
                                                      base: `border-2 ${chipColor} border-opacity-50`,
                                                      content: `text-small font-bold ${chipColor}`,
                                                }}
                                                className="p-3"

                                                variant="bordered"
                                          >
                                                {rating.title}
                                          </Chip>
                                    </div>
                  </CardBody>
            </Card>
      );
}