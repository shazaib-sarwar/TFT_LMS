import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { StudentModule } from './student/student.module';
import { AssignmentModule } from './assignment/assignment.module';

import { CourseModule } from './course/course.module';
import { TeacherModule } from './teacher/teacher.module';
import { JustfunModule } from './justfun/justfun.module';;
import configuration from './config/configuration';

@Module({
  imports: [StudentModule, AssignmentModule, CourseModule, TeacherModule, JustfunModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration]
    }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        uri: configService.get<string>('database.uri')
      }),
    }),
    
  ],
  
  controllers: [],
  providers: [],
})
export class AppModule {}
