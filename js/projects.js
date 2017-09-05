$( document ).ready(function() {
    var repos = $( "h2.section-heading" ).map(function(_, el) {
        return {
            owner: el.getAttribute("owner"),
            repo: el.textContent
        }
    });
    for (var i = 0; i < repos.length; i++) {
        var repo = repos[i];
        $.ajax({
            dataType: "json",
            url: "https://api.github.com/repos/" + repo.owner + "/" + repo.repo,
            success: addLinkAndDescription
        })
    }
});

function addLinkAndDescription(response) {
    $( '#' + response.name + "-description" ).text(response.description);
    $( '#' + response.name + "-title").html(
        "<a href=\"" + response.html_url + "\">" + response.name + "</a>"
    );
}
