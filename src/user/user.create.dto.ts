export interface UserCreateDto {
    @IsNotEmpty()
    name: string;
    email: string;
}
