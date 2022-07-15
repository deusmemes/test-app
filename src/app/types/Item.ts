export interface Item {
    title: string
    date: Date
    isCompleted: boolean
}

export interface CreateItemDto {
    title: string
}

export interface UpdateItemDto extends Partial<CreateItemDto> {}
