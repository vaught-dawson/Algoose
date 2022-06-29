package com.codecrane.server.service;



import static org.springframework.data.mongodb.core.FindAndModifyOptions.options;

import java.util.Objects;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoOperations;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.core.query.Update;
import org.springframework.stereotype.Service;

import com.codecrane.server.models.DatabaseSequence;

@Service
public class SeqGeneratorService {
	@Autowired
	private MongoOperations mongoOperations;
	
	
	public int getSeqNum(String seqName) {
		Query query = new Query(Criteria.where("id").is(seqName));
		Update update = new Update().inc( "seq", 1);
		DatabaseSequence counter = mongoOperations
				.findAndModify(query,
						update, options().returnNew(true).upsert(true),
						DatabaseSequence.class);
		
		return !Objects.isNull(counter) ? counter.getSeq() : 1;
	}
}
