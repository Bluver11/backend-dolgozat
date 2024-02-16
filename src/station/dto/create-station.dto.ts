import { IsIP, IsInt, IsNotEmpty, IsOptional, IsPositive, Max, Min } from "class-validator";
import { version } from "os";

export class CreateStationDto {
  @IsNotEmpty()
  location:string;

  @IsIP(4,{message:'Az IP-nek IP4-es formátumban kell lennie.'})
  ipAddress:string;
  @IsPositive({message:'Az akkumlátor kapacitásnak pozitívnak kell lennie'})
  @IsInt({message:'Az akkumlátor kapacitásnak egész számnak kell lennie'})
  batteryCapacity:number;
  @IsInt({message:'Az akkumlátor kapacitásnak egész számnak kell lennie'})
  @Min(0)
  @Max(100)
  @IsOptional()
  batteryCharge:number;
}
