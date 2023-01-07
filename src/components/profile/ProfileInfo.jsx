import React, { Component } from 'react'

class ProfileInfo extends Component {
    render() {
        return (
            <div className="pt-3 leading-8 w-[80%]">
                <h3 className="text-lightGray font-aboreto">Name</h3>
                <div className="text-lightGray font-aboreto">
                    Date of birthday: 32 november
                </div>
                <div className="text-lightGray font-aboreto">City: London</div>
                <div className="text-lightGray font-aboreto">
                    Education: High
                </div>
                <div className="text-lightGray font-aboreto">
                    Web-site: http//some.ru
                </div>
                <p className="text-lightGray font-josefin font-light pt-3">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Adipisci autem consectetur debitis delectus dolorem eligendi
                    eveniet excepturi, fugiat inventore ipsa ipsam iste magnam
                    maiores non odio, odit officia quaerat quasi quia repellat
                    reprehenderit rerum suscipit temporibus totam velit veniam
                    vero voluptates! Assumenda distinctio, doloribus facilis
                    ipsum recusandae repellendus vero. Adipisci autem cupiditate
                </p>
            </div>
        )
    }
}

export default ProfileInfo
