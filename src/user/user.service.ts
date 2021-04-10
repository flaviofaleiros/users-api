import { Injectable } from '@nestjs/common';
import { User } from './user.entity';

@Injectable()
export class UserService {
    private users: Array<User> = [
        {
            id: 1,
            userName: 'flavio',
            email: 'flavio.faleiros@gail.com',
            team: 'FMX',
            password: '123456',
            name: 'Flavio Augusto Faleiros',
            registerDate: new Date(),
        },
    ];

    public create(user: User): User {
        this.users.push(user);

        return user;
    }

    public searchUserName( userName: string): User {
      const userFound = this.users.find(user => user.userName === userName);

      return userFound;
    }
}
