export const getUsersCountSubtitle = (usersCount) => {
    if (usersCount < 30) {
        return `Bắt đầu với ${usersCount < 10 ? '0' + usersCount : usersCount} người dùng`;
    } else {
        return `Từ ${usersCount} người sử dụng`
    }
}