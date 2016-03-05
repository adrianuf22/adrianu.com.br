<div class="columns">
    <div class="column" ng-repeat="post in posts | limitTo:postController.limitSize">
        <div class="card card-{{ post.priority }} card-responsive">
            <div class="card-content" >
                <p class="title is-5"><a href="#">{{ post.title }}</a></p>
                <p class="subtitle is-6">{{ post.date }}</p>
                <div class="content">
                    {{ post.content }}
                    <hr/>
                    <ul class="content-tags list-inline">
                        <li ng-repeat="tag in post.tags"><a href="#{{tag}}">#{{tag}}</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</div>

<nav class="navbar">
    <div class="navbar-item is-centered"></div>                         
    <div class="navbar-item is-centered">
        <div class="control is-grouped">
            <input class="input" type="text" placeholder="Find a post" ng-model="searchTerm">
            <button class="button is-info">
                <i class="fa fa-search"></i>
            </button>
        </div>
        
        <div ng-show="searchTerm">
            <i class="fa fa-filter"></i> 
            <span class="tag is-warning" ng-repeat="term in searchTerms">
                <strong>#{{term}}</strong>
                <button class="delete" ng-click="postController.removeSearchTerm($index)"></button>
            </span>
        </div>
    </div>
</nav>

<div class="postman-olds" ng-show="posts.length > postController.limitSize">
    <div class="heading content">
        <h1 class="title">Spoke</h1>
    </div>
    <div ng-repeat="xtra_post in posts | limitTo:10:4">
        <div class="card-line card-{{ xtra_post.priority }}">
            <p class="title is-5"><a href="#">{{ xtra_post.title }}</a></p>
            <p class="subtitle is-6">{{ xtra_post.date }}</p>
            <div class="content">
                {{ xtra_post.content }}
                <hr/>
                <ul class="content-tags list-inline">
                    <li ng-repeat="tag in xtra_post.tags"><a href="#{{tag}}">#{{tag}}</a></li>
                </ul>
            </div>
        </div>
    </div>
</div>

<a href="" class="button is-primary" ng-click="postController.loadMore()">Mais</a>