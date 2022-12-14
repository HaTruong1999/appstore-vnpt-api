import { IsNumber, MaxLength, IsEmail, IsNotEmpty } from 'class-validator'
import { ApiProperty } from '@nestjs/swagger';

export class AppsDto {

    appId: number;

    @ApiProperty()
    appCode: string | null;

    @ApiProperty()
    appName: string | null;

    @ApiProperty()
    appDescription: string | null;

    @ApiProperty()
    appVersion: string | null;

    @ApiProperty()
    appPackage: string | null;

    @ApiProperty()
    appLink: string | null;

    @ApiProperty()
    appSystem: string | null;

    @ApiProperty()
    appSubject: string | null;

    @ApiProperty()
    appWpId: string | null;

    @ApiProperty()
    @IsNumber()
    appTypeId: number | null;

    @ApiProperty()
    appAvatar: string | null;

    @ApiProperty()
    @IsNumber()
    appStatus: number;

    @ApiProperty()
    appHistoryId: string | null;

    @ApiProperty()
    appCreatedDate: Date | null;

    @ApiProperty()
    appCreatedBy: string | null;

  }
