$(document).ready(function () {

    $("#description-box").hide()
    $.ajax({
        method: 'GET',
        url: 'https://api.movie.com.uy/api/shows/rss/data',
        crossDomain: true,
        dataType: 'json'
    })
        .done(function (data) {
            (data.contentCinemaShows).forEach(element => {
                let movie = $('<li></li>')
                movie.addClass('flex-item')
                movie.append(element.movie)
                let movie_image = $('<img>');
                movie_image.attr('src', element.posterURL)
                movie.append(movie_image)
                $('.flex-box').append(movie)
                onclick()
                // (element.cinemaShows).forEach(element2 => {
                //     let option = $('<option></option>')
                //     option.text(element2.cinema)
                //     $('#shopping-selector').append(option)
                // })

            })
        })

});
function onclick() {
    $('.close-button').click(function () {
        $("#description-box").slideUp("slow")
    })
    $('.flex-item').click(function () {
        $('#description-box').slideDown("slow")
        let movie_name = $(this).text()
        let img_src = $("img", this).attr("src")
        $('#image').attr('src', img_src)
        $('#movie-name').text(movie_name)
        $.ajax({
            method: 'GET',
            url: 'https://api.movie.com.uy/api/shows/rss/data',
            crossDomain: true,
            dataType: 'json'
        })
            .done(function (data) {
                data.contentCinemaShows.forEach(element => {
                    if (element.movie == movie_name) {
                        $('#genre').text(element.genre)
                        $('#description').text(element.description)
                        element.cinemaShows.forEach(element2 => {
                            let option = $('<option></option>')
                            option.text(element2.cinema)
                            option.attr('id', element2.cinema.replace(" ",""))
                            if ($('#' + element2.cinema.replace(" ","")).length == 0) {
                                $('#shopping-selector').append(option)
                                element2.shows.forEach(element3 => {
                                    let span = $('<span class="float"></span>')
                                    span.text(element3.date + ", " + element3.timeToDisplay + ", " + element3.formatLang + ", " + element3.screenName + ", " + element3.genre + ", " + element3.rating + ", " + element3.ratingDescription + "\n")
                                    $('.description-container').append(span)
                                })
                            }
                        })
                    }
                });
            })




    })
}