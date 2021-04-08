# README

## Introduction for app
1. Support real-time interaction in same account among different browsers by web socket.
2. Componentize lists and cards by Vue, to implement functions such as adding, deleting, and editing to-do items.
3. Cards and lists can be dragged and sorted as well.

## Development information:
* Ruby: 2.6.5
* Rails: 6.1.3
* OS: Windows-Subsystem-Linux(Ubuntu 18.04 LTS)
* DB: PostgreSQL

Make sure the tools in need has been already installed and version better not older than app used. If you have to install Ruby or Rails but encounter some problems, instructions are elaborated in the end.

##  The steps to get the app up and running:
* `bundle install`       				  #install Rails gem files for app need.
* `npm install yarn` 		      	  #ignore it if you’ve already installed yarn before.
* `yarn install -checkfiles`		  #install the libraries for front-end needs
* `yarn update` 			          	#ensure that the libraries version is latest.
* `foreman start`				          #activate both rails server & webpack same time(=`rails server`+`bin/webpack-dev-server`), if some error occur, next step will be solution.

## Database creation & initialization:
It is very common for encounter some error message after `foreman start` if you start the app first time, try to run following instructions to ***create DB*** & ***initialization***:
* `rails db:create`								#Database creation
* `bin/rails db:migrate RAILS_ENV=development`	#Database initialization, error message may show **ActiveRecosrd::PendingMigrationError Migrations are pending. To resolve this issue, run: bin/rails db:migrate RAILS_ENV=development**

## Ruby installation:
* If you have not installed Ruby, Ruby Version Management (RVM) is recommendation for you, here’s an instruction for reference (https://rvm.io/).

## Rails installation: 
Ensure that Ruby has installed already, then go ahead with this step.
* `gem install rails` 			      #install the latest Rails version
* `rails -v` 				              #check Rails installation version
* `sudo apt-get install nodejs`	  #Problems may be occurred when installing Rails, because there are some JS code in Rails be executed through node.js. Corresponding solution for this is installing node.js before Rails.

## Give some feedbacks to me ##
* I'm a starter of Rails, this is the first time I try to write README.md file. If some descriptoins are ambiguios or not work for your problem, please feel free to give me some suggestion to make it better, thanks!