function verifyBooking(user, flight) {
    if (
        typeof user !== "object" ||
        user === null ||
        typeof flight !== "object" ||
        flight === null ||
        typeof user.isLoggedIn !== "boolean" ||
         typeof user.hasValidPassport !== "boolean"
    ) {
        return "Lỗi: Dữ liệu không hợp lệ!";
    }
    if (user.isLoggedIn !== true){
        return "Từ chối: Vui lòng đăng nhập để tiếp tục";
    }
    if (user.hasValidPassport !== true){
        return "Từ chối: Hộ chiếu không hợp lệ hoặc đã hết hạn";
    }
    if (!Number.isFinite(user.age)
        ||!Number.isFinite(user.accountBalance)
        ||!Number.isFinite(flight.availableSeats)
        ||!Number.isFinite(flight.price)
        ||user.age <= 0
        ||flight.availableSeats < 0
        ||flight.price < 0
        ||user.accountBalance < 0
    ) {
        return "Lỗi: Dữ liệu không hợp lệ!";
    }
    if (user.age < 18){
        return "Từ chối: Khách hàng chưa đủ 18 tuổi";
    }
    if (flight.availableSeats <= 0){
        return "Từ chối: Chuyến bay đã hết chỗ";
    }
    if (user.accountBalance < flight.price){
        return "Từ chối: Số dư không đủ"
    }
    return "Thành công: Đặt vé hợp lệ";
}
console.log(
    verifyBooking(
        {
            isLoggedIn: true,
            hasValidPassport: true,
            age: NaN,
            accountBalance: NaN
        },
        {
            availableSeats: NaN,
            price: NaN
        }
    )
);//Lỗi: Dữ liệu không hợp lệ!
console.log("CASE 1:",
    verifyBooking(
        {
            isLoggedIn: true,
            hasValidPassport: true,
            age: 25,
            accountBalance: 5000
        },
        {
            availableSeats: 5,
            price: 3000
        }
    )
);//Thành công: Đặt vé hợp lệ!
console.log("CASE 2:",
    verifyBooking(
        {
            isLoggedIn: true,
            hasValidPassport: true,
            age: 15,
            accountBalance: 5000
        },
        {
            availableSeats: 5,
            price: 3000
        }
    )
);//Từ chối: Khách hàng chưa đủ 18 tuổi
console.log("CASE 3:",
    verifyBooking(
        {
            isLoggedIn: false,
            hasValidPassport: true,
            age: 25,
            accountBalance: 5000
        },
        {
            availableSeats: 5,
            price: 3000
        }
    )
);//Từ chối: Vui lòng đăng nhập để tiếp tục
console.log("CASE 4:",
    verifyBooking({}, {})
);//Lỗi: Dữ liệu không hợp lệ!
console.log("CASE 5:",
    verifyBooking(
        {
        isLoggedIn: true,
        hasValidPassport: true,
        age: 25,
        accountBalance: 5000
        }
    )
);//Lỗi: Dữ liệu không hợp lệ!
console.log("CASE 6:",
    verifyBooking(
        null,
        {
            availableSeats: 5,
            price: 3000
        }
    )
);//Lỗi: Dữ liệu không hợp lệ!
console.log("CASE 7:",
    verifyBooking(
        {
            isLoggedIn: true,
            hasValidPassport: true,
            age: 25,
            accountBalance: "100000"
        },
        {
            availableSeats: 5,
            price: 3000
        }
    )
);//Lỗi: Dữ liệu không hợp lệ!
console.log("CASE 8:",
    verifyBooking(
        {
        isLoggedIn: true,
        hasValidPassport: true,
        age: -10,
        accountBalance: 5000
        },
        {
        availableSeats: 5,
        price: 3000
        }
    )
);//Lỗi: Dữ liệu không hợp lệ!