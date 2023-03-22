import { Component } from 'react'
import { generateUniqueID } from 'web-vitals/dist/modules/lib/generateUniqueID'
import axios from 'axios'
import { BASE_URL } from '../../api/baseUrl'

class FriendsPagination extends Component {

    componentDidMount() {
        axios
            .get(
                `${BASE_URL}/users?page=${this.props.currentPage}&count=${this.props.pageSize}`
            )
            .then((res) => {
                this.props.setFriends(res.data.items)
                this.props.setTotalFriendsCount(res.data.totalCount)
            })
    }


    onChangeCurrentPage = (numberPage) => {
        this.props.setCurrentPage(numberPage)
        axios
            .get(
                `${BASE_URL}/users?page=${numberPage}&count=${this.props.pageSize}`
            )
            .then((res) => this.props.setFriends(res.data.items))
    }

    render() {

        const {totalFriendsCount, pageSize, currentPage} = this.props

        const currentPageStyle =
            'font-bold cursor-pointer px-4 border rounded-xl p-3 bg-darkGreen text-lightGray mx-3'
        const anotherPageStyle =
            'cursor-pointer px-4 border rounded-xl p-3 bg-lightGray text-darkGreen mx-3'

        const pagesCount = Math.ceil(totalFriendsCount / pageSize)
        const pages = []

        for (let i = 1; i <= pagesCount; i++) {
            if (pages.length < 10) pages.push(i)
        }

        return (
            <div className="mt-8 mx-auto text-center">
                {pages.map((numberPage) => {
                    return (
                        <span
                            key={generateUniqueID()}
                            className={
                                currentPage === numberPage
                                    ? currentPageStyle
                                    : anotherPageStyle
                            }
                            onClick={() =>
                                this.onChangeCurrentPage(numberPage)
                            }
                        >
                                {numberPage}
                            </span>
                    )
                })}
            </div>
        )
    }
}

export default FriendsPagination