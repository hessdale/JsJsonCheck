let selection = [
    {
        title: `Peach`,
        price: .1,
        image_url: `https://images.pexels.com/photos/5346060/pexels-photo-5346060.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1`,
        description: `fuzzy peach`
    },
]

let selection_json = JSON.stringify(selection);



Cookie.set(`user_selection`, selection_json);